import Image from "next/image";

interface LectureType {
  name: string;
  profession: string;
  description: string;
  avatar: string;
}

const lecturers: LectureType[] = [
  {
    name: "Nguyễn Đức Huy",
    profession: "Fullstack Developer/Giảng viên",
    description:
      "Hơn 2 năm kinh nghiệm trong ngành Data Science và sau đó là 5 năm kinh nghiệm trong lĩnh vực phát triển website và giảng dạy bootcamp, mình tin sẽ cho các bạn được câu trả lời làm thế nào để học lập trình hiệu quả và quan trọng nhất là học thế nào để trở thành lập trình viên! và, Huy đang ở đây để sẵn sàng “on air” cùng bạn!",
    avatar:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688548310/about/members/huy_tzkbcl.png",
  },
  {
    name: "Nguyễn Tuấn Phúc",
    profession: "Mentor",
    description:
      "Chào các bạn! Mình là Phúc, hiện là Developer tại LIKELION và đảm nhiệm vai trò mentor cho các khoá học của LIKELION. Với kinh nghiệm thực chiến dự án cũng như kinh nghiệm đồng hành với các bạn sinh viên qua nhiều khoá học, từ các bạn sinh viên CNTT đến các học viên chuyển ngành, mình hiểu được các khó khăn các bạn có thể gặp phải trong quá trình học và bản thân mình cũng mong muốn cùng các bạn từng bước chinh phục các khó khăn đó để đi đến thành công. Vì thế hãy đồng hành cùng mình nhé! ",
    avatar:
      "https://res.cloudinary.com/dbscqlwl7/image/upload/v1688548311/about/members/phuc_eucbts.png",
  },
];

function CourseLecturerRow({ lecturer }: { lecturer: LectureType }) {
  return (
    <div className="grid sm:grid-cols-[100px_1fr] gap-2 sm:gap-8 bg-muted rounded-xl p-8 border">
      <div className="relative sm:w-full aspect-[1/1] w-20 mx-auto rounded-full bg-gradient-to-br from-[#FFE3CB] to-[#ff7100] overflow-hidden">
        <Image
          src={lecturer.avatar}
          fill
          alt={lecturer.name}
          className="object-contain"
        />
      </div>
      <div className="space-y-1 text-center sm:space-y-2 sm:text-left">
        <h3 className="text-lg font-medium uppercase">{lecturer.name}</h3>
        <div className="tracking-wider text-muted-foreground">
          {lecturer.profession}
        </div>
        <p className="text-sm leading-relaxed sm:text-base">
          {lecturer.description}
        </p>
      </div>
    </div>
  );
}

export default function CourseLecturers() {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-medium">Đội ngũ hướng dẫn</h2>
      <div className="space-y-4">
        {lecturers.map((lecturer) => (
          <CourseLecturerRow key={lecturer.name} lecturer={lecturer} />
        ))}
      </div>
    </section>
  );
}
