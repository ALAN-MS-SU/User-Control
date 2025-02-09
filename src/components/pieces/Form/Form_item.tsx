export function Form_Item({
  Label,
  Input,
  Name,
  Select,
  Items,
  DefaultValue,
}: {
  Label: string;
  Input?: string;
  Name: string;
  Select?: boolean;
  Items?: string[];
  DefaultValue?: string;
}) {
  return (
    <div className="grid grid-cols-2">
      <label
        className=" text-center relative w-[100px] left-[5px] sm:left-[20px]"
        htmlFor={Name}
      >
        {Label}
      </label>
      {Input && (
        <input
          required
          defaultValue={DefaultValue || ""}
          className=" relative border-[var(--secound)] border-b bg-transparent right-[15px] sm:right-[45px]"
          type={Input}
          name={Name}
          id={Name}
        />
      )}
      {Select && (
        <select
          defaultValue={DefaultValue || Items[0]}
          required
          className=" relative border-[var(--secound)] border-b bg-transparent  right-[15px] w-[100px] sm:w-[175px] sm:right-[45px]"
          name={Name}
          id={Name}
        >
          {Items.map((Item, index) => {
            return (
              <option key={index} value={Item}>
                {Item}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
}
export function input_error() {
  const inputs: HTMLInputElement[] = Array.from(
    document.querySelectorAll("input")
  );
  inputs.map((input) => {
    input.style.borderColor = "red";
  });
}
