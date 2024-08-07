import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
          <h1>form de login</h1>
        </TabsContent>

        <TabsContent value="registrar">
          <h1>form de registrar</h1>
        </TabsContent>
        </Tabs>




      </div>
      
    </main>
  );
}
