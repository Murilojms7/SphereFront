import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input"
import Image from "next/image";
import Link from "next/link"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="absolute right-1 top-1">  
        <ModeToggle/>
      </nav>
        <div className="p-10 flex-1 content-center mb-20 border-x-background">

          <aside className="pl-6">
            <Image src="/Logo.png" alt="logo" width={100} height={100} />
          </aside>
          
          <h1 className="text-5xl font-extrabold py-5 ">Bakery</h1>

          <Tabs defaultValue="entrar" className="w-[200px]">
          <TabsList className="">
          <TabsTrigger value="entrar">Entrar</TabsTrigger>
          <TabsTrigger value="registrar">Registrar</TabsTrigger>
          </TabsList>
          <TabsContent value="entrar" >
            <Input type="Login" placeholder="Login" className="mt-2"/>
            
            <Input type="Password" placeholder="Password" className="mt-2"/>
            <Button asChild>
              <Link href="/" className="mt-2">Login</Link>
            </Button>
          </TabsContent>
          
          <TabsContent value="registrar">
          <Input type="Login" placeholder="Login" className="mt-2"/>
            <Input type="Password" placeholder="Password" className="mt-2"/>
            <Input type="Password" placeholder="Password Again" className="mt-2"/>
            <Button asChild>
              <Link href="/" className="mt-2">Registrar</Link>
            </Button>
          </TabsContent>
          </Tabs>
        </div>
    </main>
  );
}
