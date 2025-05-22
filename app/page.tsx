import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PeepsClient } from "@/components/PeepsClient";
import { peeps } from "@/lib/content";

export default async function PagePeepsGallery() {
  return (
    <Card className="w-full mx-auto border border-purple-200 shadow-lg xl:scale-105">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Manga Gallery
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {peeps.map((peep) => (
          <PeepsClient key={peep.id} peep={peep} />
        ))}
      </CardContent>
    </Card>
  );
}
