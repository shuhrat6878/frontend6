import plas from "@/assets/plas.svg"
import { Typography } from "@/components/ui/typography";
import { Google } from "@/assets/google.tsx";
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

import {
  MailIcon,
} from "lucide-react"


import { Button } from "@/components/ui/button"

function App() {

  return (
    <section className="bg-gray-200 pb-10">-
      <div className="container p-10 space-y-6">

        <Typography variant="h1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>

        <Typography variant="h2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>

        <Typography variant="h3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>

        <Typography variant="h4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>

        <Typography variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>


        <Typography variant="body1">
          Body 1 text example lorem ipsum dolor sit amet
        </Typography>

        <Typography variant="body2">
          Body 1 text example lorem ipsum dolor sit amet
        </Typography>

        <Typography variant="caption">
          Caption text goes here
        </Typography>

        <Typography variant="link">
          This is a link style
        </Typography>

      </div>

      {/* buttonlar guruxi */}

      <div className="container flex items-center mt-10 gap-11">
        <Button className="w-[414px] h-14 text-[14px] font-extrabold" >LOGIN</Button>

        <Button className="flex items-center gap-8 w-[209px] h-12">
          Create new event
          <img src={plas} alt="icon" className="w-4 h-4" />
        </Button>

        <Button className="text-[14px] w-19 h-10 font-semibold"> Month</Button>

      </div>

      {/* inputlar guruxlari */}


      <div className="container">
        <div className="bg-white p-6 my-8">
          <InputGroup className="w-2xl mb-6">
            <InputGroupInput placeholder="Infor@gmail.com" />
            <InputGroupAddon>
              <MailIcon />
            </InputGroupAddon>
          </InputGroup>

          <label>Email</label>
          <InputGroup>
            <InputGroupInput placeholder="Infor@gmail.com" />
            <InputGroupAddon>
              <MailIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>

      <div className="container">
        <Button className="relative p-4 flex items-center justify-center w-[414px] bg-popover text-foreground">
          <span className="absolute  left-4 top-1/2 -translate-y-1/2">
            <Google />
          </span>
          Login with Google
        </Button>


      </div>

      {/* lebel */}

      <div className="container mt-6">
        <div className="flex items-center space-x-2 w-30 h-7 text-[14px]">
          <Checkbox id="terms" className="border border-[#d4c9c9]"/>
          <Label htmlFor="terms">Remember</Label>
        </div>
        <div className="flex items-center space-x-2 w-30 h-7">
          <Checkbox id="terms" className="border border-[#d4c9c9]"/>
          <Label htmlFor="terms">Remember</Label>
        </div>
      </div>

    </section>
  )
}

export default App
