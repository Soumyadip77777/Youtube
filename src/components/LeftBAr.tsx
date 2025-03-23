export const LeftBar = () => {
    return (
      <div className="bg-black text-white w-60 h-screen flex flex-col overflow-y-auto hidden md:block pr-25">
        {/* Main navigation */}
        <BarWithIcon title="Home" icon={<HomeIcon />} active={true} />
        <BarWithIcon title="Shorts" icon={<ShortsIcon />} />
        <BarWithIcon title="Subscriptions" icon={<SubscriptionsIcon />} />
        <BarWithIcon title="YouTube Music" icon={<MusicIcon />} />
  
        <Line />
  
        {/* You section */}
        <div className="flex items-center justify-between px-5 py-2">
          <span className="font-medium text-sm">You</span>
          <ChevronRightIcon />
        </div>
        <BarWithIcon title="History" icon={<HistoryIcon />} />
        <BarWithIcon title="Playlists" icon={<PlaylistsIcon />} />
        <BarWithIcon title="Your videos" icon={<YourVideosIcon />} />
        <BarWithIcon title="Your courses" icon={<CoursesIcon />} />
        <BarWithIcon title="Watch later" icon={<WatchLaterIcon />} />
        <BarWithIcon title="Liked videos" icon={<LikedVideosIcon />} />
        <BarWithIcon title="Downloads" icon={<DownloadsIcon />} />
  
        <Line />
  
        {/* Subscriptions section */}
        <div className="px-5 py-2">
          <span className="font-medium text-sm">Subscriptions</span>
        </div>
        <BarWithIcon title="8bit MAMBA" icon={<ChannelIcon />} notification={true} />
        <BarWithIcon title="Aaj Tak" icon={<ChannelIcon />} notification={true} />
        <BarWithIcon title="Aakash Chopra" icon={<ChannelIcon />} notification={true} />
        <BarWithIcon title="ABP ANANDA" icon={<ChannelIcon />} notification={true} />
      </div>
    )
  }
  
  export const Line = () => {
    return <div className="w-full h-px bg-neutral-800 my-2"></div>
  }
  
  function BarWithIcon({ title, icon, active = false, notification = false }) {
    return (
      <div className="overflow-x-visible">
        <BarElement title={title} icon={icon} active={active} notification={notification} />
      </div>
    )
  }
  
  function BarElement({ icon, title, active = false, notification = false }) {
    return (
      <div className={`flex items-center px-5 py-2 cursor-pointer ${active ? "bg-neutral-800" : "hover:bg-neutral-800"}`}>
        <div className="w-6 h-6 mr-6 flex items-center justify-center">{icon}</div>
        <div className="text-sm">{title}</div>
        {notification && <span className="ml-auto text-xs text-red-600">(•)</span>}
      </div>
    )
  }
  
  // Icon components
  function HomeIcon() {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 10.3C4 10.1 4.1 10 4.3 9.9L11.3 4.5C11.7 4.2 12.3 4.2 12.7 4.5L19.7 9.9C19.9 10 20 10.1 20 10.3V19C20 19.6 19.6 20 19 20H14V15H10V20H5C4.4 20 4 19.6 4 19V10.3Z" />
      </svg>
    )
  }
  
  function ShortsIcon() {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 14.65V9.35L15 12L10 14.65ZM17.77 10.32C16.97 10 16.14 9.79 15.3 9.64L19 3H15L12 7.8L9 3H5L8.7 9.64C7.86 9.79 7.03 10 6.23 10.32C5.14 10.8 4.3 11.34 3.74 12.06C3.18 12.77 2.9 13.56 2.9 14.44C2.9 15.32 3.18 16.11 3.74 16.83C4.3 17.54 5.14 18.09 6.23 18.56C7.32 19.04 8.59 19.37 10 19.54C11.41 19.71 12.91 19.8 14.5 19.8C16.09 19.8 17.59 19.71 19 19.54C20.41 19.37 21.68 19.04 22.77 18.56C23.86 18.09 24.7 17.54 25.26 16.83C25.82 16.11 26.1 15.32 26.1 14.44C26.1 13.56 25.82 12.77 25.26 12.06C24.7 11.34 23.86 10.8 22.77 10.32C21.68 9.84 20.41 9.51 19 9.34C17.59 9.17 16.09 9.09 14.5 9.09C12.91 9.09 11.41 9.17 10 9.34C8.59 9.51 7.32 9.84 6.23 10.32V10.32Z" />
      </svg>
    )
  }
  
  function SubscriptionsIcon() {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 7L12 12L6 7" />
        <rect x="4" y="4" width="16" height="16" rx="2" />
      </svg>
    )
  }
  
  function MusicIcon() {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8V12L14 14" />
      </svg>
    )
  }
  
  function HistoryIcon() {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8V12L15 13.5" />
      </svg>
    )
  }
  
  function PlaylistsIcon() {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 7H21" />
        <path d="M3 12H21" />
        <path d="M3 17H21" />
      </svg>
    )
  }
  
  function YourVideosIcon() {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M10 10L15 12L10 14V10Z" />
      </svg>
    )
  }
  
  function CoursesIcon() {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
        <path d="M2 17L12 22L22 17" />
        <path d="M2 12L12 17L22 12" />
      </svg>
    )
  }
  
  function WatchLaterIcon() {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7V12L15 15" />
      </svg>
    )
  }
  
  function LikedVideosIcon() {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 10V18H3V10H7Z" />
        <path d="M21 10H17L19 4H13V18H21L19 10Z" />
      </svg>
    )
  }
  
  function DownloadsIcon() {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 3V16" />
        <path d="M7 12L12 17L17 12" />
        <path d="M3 17V20H21V17" />
      </svg>
    )
  }
  
  function ChevronRightIcon() {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 6L15 12L9 18" />
      </svg>
    )
  }
  
  function ChannelIcon() {
    return <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">C</div>
  }
  
  