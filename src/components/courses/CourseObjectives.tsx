import { Check } from "lucide-react";
import Image from "next/image";

function ObjectivesItem({ name }: { name: string }) {
  return (
    <li className="flex items-center gap-4">
      <div className="flex items-center justify-center rounded-full w-7 h-7 shrink-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        <Check className="w-4 h-4 font-bold text-muted" strokeWidth={3} />
      </div>
      {name}
    </li>
  );
}

export default function CourseObjectives({
  objectives,
}: {
  objectives: string[];
}) {
  return (
    <section>
      <div className="max-w-screen-xl px-8 mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-8">
          <div className="hidden md:block">
            <div className="relative w-full max-w-[500px] aspect-[1/1]">
              <Image
                src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1695783126/courses/5143541_1_c7fkvm.png"
                alt="Bạn sẽ học được gì?"
                fill
              />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Bạn sẽ học được gì?</h2>
            <ul className="flex flex-col gap-4 text-lg">
              {objectives.map((ob) => (
                <ObjectivesItem key={ob} name={ob} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
