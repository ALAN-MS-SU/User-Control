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
        className=" text-center relative left-[20px] w-[100px]"
        htmlFor={Name}
      >
        {Label}
      </label>
      {Input && (
        <input
          required
          defaultValue={DefaultValue||""}
          className=" relative right-[45px] border-[var(--secound)] border-b bg-transparent"
          type={Input}
          name={Name}
          id={Name}
        />
      )}
      {Select && (
        <select
          defaultValue={DefaultValue||Items[0]}
          required
          className=" relative w-[175px] right-[45px] border-[var(--secound)] border-b bg-transparent"
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
