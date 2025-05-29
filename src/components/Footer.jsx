function Footer() {
  return (
    <div className="relative w-full py-12 bg-black">
      {/* Silver shining line - reduced width */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-70"></div>
      
      {/* Shimmer effect container - reduced width */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px overflow-hidden">
        <div className="animate-footershimmer absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-80"></div>
      </div>
      
      {/* Copyright text */}
      <div className="flex items-center justify-center">
        <p className="text-sm sm:text-base font-medium" style={{color: '#ededed'}}>
          © 2025 Aditya Raj. All rights reserved.
        </p>
      </div>
    </div>
  );
}
export default Footer;

