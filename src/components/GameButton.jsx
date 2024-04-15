function GameButton({
  field,
  value,
  isSelected,
  onChangeTicket,
  maxSize,
  disabled,
}) {
  return (
    <button
      className={
        " w-10 h-10 rounded-md  flex justify-center items-center " +
        (isSelected ? " scale-90 bg-[#FFD205] " : " border ")
      }
      onClick={() => onChangeTicket(field, value, maxSize)}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

export default GameButton;
