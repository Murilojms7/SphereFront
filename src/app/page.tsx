import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-between ">
      <nav className="absolute right-1 top-1">
        <ModeToggle/>
      </nav>

      <aside className="h-screen hidden lg:block">
        <Image src="/login.png" alt="login" width={554} height={832}/>
      </aside>

      <div>
        <div className="size-[75px] bg-rose-600 rounded-full"></div>
        <h1 className="text-4xl font-extrabold">Sphere</h1>
        
        <Tabs defaultValue="entrar" className="w-[400px]">
        <TabsList>
        <TabsTrigger value="entrar">Entrar</TabsTrigger>
        <TabsTrigger value="registrar">Registrar</TabsTrigger>
        </TabsList>
        <TabsContent value="entrar">
          <form action="" className="flex flex-col items-center gap-8">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="login">Login</Label>
            <Input type="login" id="login" placeholder="login" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password"  />
          </div>
          <Button>Entrar</Button>
          </form>
        </TabsContent>

        <TabsContent value="registrar">
          <form action="" className="flex flex-col items-center gap-8">
            <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="login">Login</Label>
            <Input type="login" id="login" placeholder="login" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password"  />
          </div>
          <Button>Entrar</Button>
          </form>
          
        </TabsContent>
        </Tabs>




      </div>
      
    </main>
  );
}
