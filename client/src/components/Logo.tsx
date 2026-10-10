export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Square Company Logo */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1.5 shadow-md sm:h-11 sm:w-11">
        <img
          src="/logo.png"
          alt="FENVARO Infotech"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Company Name */}
      <div className="flex flex-col leading-none">
        <span className="text-sm font-extrabold tracking-[0.08em] text-white sm:text-base">
          FENVARO
        </span>

        <span className="mt-1 text-[7px] font-semibold tracking-[0.12em] text-accent sm:text-[9px] sm:tracking-[0.16em]">
          INFOTECH PVT. LTD.
        </span>
      </div>
    </div>
  );
}