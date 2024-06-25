import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex">
      <div className="mx-auto h-screen bg-slate-100 flex w-[80%]">             
        <div className="mx-auto my-auto bg-slate-50 p-10 rounded-md w-[50%] h-96 flex flex-col gap-10">
          <Title level={3}>Login - Manauaradiesel</Title>
          <Input type="email" placeholder="Digite seu e-mail"/>
          <Input type="password" placeholder="Digite a senha"/>
          <Button asChild>
            <Link href="/initial">Login</Link>
          </Button>
        </div>
      </div>
    </div> 
  );
}
