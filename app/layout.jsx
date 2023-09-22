import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "IdeaForge",
  description: "AI-Enriched Prompts: Igniting Imaginations Worldwide",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          {/* Actual main part of the application */}
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
