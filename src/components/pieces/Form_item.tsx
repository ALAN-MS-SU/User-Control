

export function Form_Item({Label,Input,Name}:{Label:string, Input:string, Name:string}) {
  return (
    <div className="grid grid-cols-2">
      <label className=" text-center relative left-[55px] w-[55px]" htmlFor={Name}>
        {Label}
      </label>
      <input
        className=" relative right-[45px] border-[var(--secound)] border-b bg-transparent"
        type={Input}
        name={Name}
        id={Name}
      />
    </div>
  );
}
