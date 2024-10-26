import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
        title,
          smallDescription,
          "currentSlug": slug.current,
          titleImage
      }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-5">
      {data.map((card, index) => (
        <Card key={index}>
          <Image
            src={urlFor(card.titleImage).url()}
            alt={card.title}
            width={500}
            height={500}
            className="rounded-t-lg h-[500px] object-cover w-full"
          />
          <CardContent className="mt-5">
            <h3 className="text-xl">{card.title}</h3>
            <p className="">{card.smallDescription}</p>
            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${card.currentSlug}`}>Read More &rarr;</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
