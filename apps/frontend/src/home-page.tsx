import { Button, Link, Image } from "@chakra-ui/react";
// import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  const items = [
    { name: "Plastic Bags", image: "/placeholder.svg?height=100&width=100" },
    { name: "Clothes", image: "/placeholder.svg?height=100&width=100" },
    { name: "Electronic Items", image: "/placeholder.svg?height=100&width=100" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-green-100">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-green-200">
        <div className="flex items-center space-x-2">
          <RecycleIcon className="h-8 w-8 text-green-600" />
          <span className="text-xl font-bold text-green-800">EcoRecycle</span>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="bg-green-500 text-white hover:bg-green-600">
            <Link href="/donor">Donor</Link>
          </Button>
          <Button variant="outline" className="bg-green-500 text-white hover:bg-green-600">
            <Link href="/collector">Collector</Link>
          </Button>
        </div>
        <Button variant="ghost" asChild className="text-green-800">
          <Link href="/login">Login</Link>
        </Button>
      </header>
      <main className="flex-1 py-12 px-4">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-8">Recyclable Items</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* {items.map((item, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-full mb-4"
                />
                <h2 className="text-xl font-semibold text-green-700">{item.name}</h2>
                <p className="text-green-600 mt-2 text-center">Help the environment by recycling your {item.name.toLowerCase()}</p>
                <Button className="mt-4 bg-green-500 text-white hover:bg-green-600">
                  Recycle Now
                </Button>
              </CardContent>
            </Card>
          ))} */}
        </div>
      </main>
      <footer className="py-6 text-center bg-green-200 text-green-800">
        <p>© 2023 EcoRecycle. All rights reserved.</p>
      </footer>
    </div>
  )
}

import { RecycleIcon } from "lucide-react"