import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Registerp = () => {
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Register Now"} />
        <SubHeading label={"Enter University infromation to Register"} />
        <InputBox placeholder="Chandigarh University" label={"University Name"} />
        <InputBox placeholder="2014chd" label={"Registration Number"} />
        <InputBox placeholder="University@mail.in" label={"Email"} />
        <InputBox placeholder="your Password" label={"Password"} />
        <div className="pt-4">
          <Button label={"Register"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"home"} to={"enter home page router"} />
      </div>
    </div>
  </div>
}