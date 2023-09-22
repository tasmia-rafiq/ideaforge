"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  };

  const handleProfileClick = () => {
    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  return (
    <div className="prompt_card">
      <div className="prompt_card_in">
        <div className="flex justify-between items-start gap-5">
          <div className="flex-1 flex-justify-start items-center gap-3 cursor-pointer">
            <Image
              src={post.creator.image}
              alt="user_image"
              width={40}
              height={40}
              className="mb-2 rounded-full object-contain user_avatar"
              onClick={handleProfileClick}
            />

            <div className="flex flex-col" onClick={handleProfileClick}>
              <h3 className="font-inter font-semi-bold text-white">
                {post.creator.username}
              </h3>
              <p className="font-inter text-sm text-gray-400">
                {post.creator.email}
              </p>
            </div>
          </div>

          {/* COPY BUTTON */}
          <div className="copy_btn" onClick={handleCopy}>
            <Image
              src={
                copied === post.prompt
                  ? "/assets/icons/tick.svg"
                  : "/assets/icons/copy.svg"
              }
              width={16}
              height={16}
            />
          </div>
        </div>

        <p className="my-4 border-t pt-3 border-indigo-500 font-poppins text-sm text-white">{post.prompt}</p>
        <p
          className="font-inter text-sm light_purple_gradient cursor-pointer"
          onClick={() => handleTagClick && handleTagClick(post.tag)}
        >
          #{post.tag}
        </p>

        {session?.user.id === post.creator._id && pathName === "/profile" && (
          <div className="mt-5 flex-center gap-4 border-t border-indigo-500 pt-3">
            <p
              className="font-inter text-sm light_purple_gradient cursor-pointer"
              onClick={handleEdit}
            >
              Edit
            </p>

            <p
              className="font-inter text-sm purple_gradient cursor-pointer"
              onClick={handleDelete}
            >
              Delete
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptCard;
