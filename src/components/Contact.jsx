function Contact() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/adit.raj24/#",
      icon: "https://cdn.simpleicons.org/instagram/ffffff",
      color: "bg-gradient-to-br from-orange-500 to-pink-500",
    },
    {
      name: "Twitter",
      url: "https://x.com/adit_raj24",
      icon: "https://cdn.simpleicons.org/x/ffffff",
      color: "bg-gradient-to-br from-orange-400 to-orange-600",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aditraj24/",
      icon: null,
      color: "bg-gradient-to-br from-orange-600 to-orange-800",
    },
    {
      name: "GitHub",
      url: "https://github.com/aditraj24",
      icon: "https://cdn.simpleicons.org/github/ffffff",
      color: "bg-gradient-to-br from-orange-700 to-orange-900",
    },
    {
      name: "Discord",
      url: "https://discord.com/channels/@me",
      icon: "https://cdn.simpleicons.org/discord/ffffff",
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
    },
    {
      name: "Reddit",
      url: "https://www.reddit.com/user/Numerous-Metal-9117/",
      icon: "https://cdn.simpleicons.org/reddit/ffffff",
      color: "bg-gradient-to-br from-orange-500 to-red-600",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-8 text-white"
      style={{
        background: "linear-gradient(to bottom, #0a0a0a, #000000)",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16"
          style={{
           
            background: "linear-gradient(to right, #ff5722, #ff7043, #ffab91)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textShadow: "0 0 12px rgba(255, 87, 34, 0.4)",
            fontFamily: "'Fondamento', cursive",
          }}
        >
          Reach Out At
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center p-4 rounded-xl bg-[#101010] border border-white/10 hover:border-orange-400/50 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-full ${social.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                {social.name === "LinkedIn" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-8 h-8"
                  >
                    <path
                      d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 
              2.76 2.24 5 5 5h14c2.76 0 
              5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
              19h-3v-9h3v9zm-1.5-10.3c-.97 
              0-1.75-.78-1.75-1.75S5.53 
              5.2 6.5 5.2 8.25 5.98 8.25 
              6.95 7.47 8.7 6.5 8.7zm13.5 
              10.3h-3v-4.6c0-1.1-.9-2-2-2s-2 
              .9-2 2v4.6h-3v-9h3v1.3c.68-.99 
              1.9-1.6 3.2-1.6 2.2 0 4 1.8 4 
              4v5.3z"
                    />
                  </svg>
                ) : (
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-8 h-8 object-contain filter brightness-0 invert"
                  />
                )}
              </div>

              <span
                className="text-sm text-gray-300 group-hover:text-white transition-colors"
                style={{ fontFamily: "'Satoshi', sans-serif" }}
              >
                {social.name}
              </span>

              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </a>
          ))}
        </div>

        {/* Send Me a Message Tile */}
        <div
          className="mt-16 p-6 bg-[#101010]/70 backdrop-blur-sm rounded-xl border border-white/10 max-w-md mx-auto
          hover:bg-orange-900/10 hover:border-orange-400/30 hover:shadow-md hover:shadow-orange-600/20
          transition-all duration-300 ease-in-out"
        >
          <h3
            className="text-xl font-semibold mb-4 text-orange-300"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            Send me a message
          </h3>
          <a
            href="mailto:adityarajykme24@gmail.com"
            className="inline-flex items-center text-white hover:text-orange-300 transition-colors select-text"
          >
            adityarajykme24@gmail.com
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 
                002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 
                002 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
