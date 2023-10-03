import CourseCTA from "@/components/courses/CourseCTA";
import CourseContent from "@/components/courses/CourseContent";
import CourseHeading from "@/components/courses/CourseHeading";
import CourseObjectives from "@/components/courses/CourseObjectives";
import CoursePartnership from "@/components/courses/CoursePartnership";
import CourseRequirements from "@/components/courses/CourseRequirements";
import CourseReviews from "@/components/courses/CourseReviews";
import { getCourseBySlug } from "@/services/courseService";
import { Metadata, ResolvingMetadata } from "next";
import CourseOpeningSchedules from "@/components/courses/CourseOpeningSchedules";
import CourseWorkshops from "@/components/courses/CourseWorkshops";
import CourseWorkspaces from "@/components/courses/CourseWorkspaces";
import CourseFeedback from "@/components/courses/CourseFeedback";
import CourseLecturers from "@/components/courses/CourseLecturers";
import CoursePromotion from "@/components/courses/CoursePromotion";
import CoursePaymentMethods from "@/components/courses/CoursePaymentMethods";
import CourseBenefits from "@/components/courses/CourseBenefits";
import CourseNavigation from "@/components/courses/CourseNavigation";
import data from "@/data/data.json";
import { redirect } from "next/navigation";
import CourseFeatures from "@/components/courses/CourseFeatures";
import CourseShowcases from "@/components/courses/CourseShowcases";

export async function generateMetadata(
  {
    params,
  }: {
    params: { courseSlug: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const course = getCourseBySlug(params.courseSlug);

  if (!course) return {};

  const { title, subtitle, thumbnail_og } = course;

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${title}`,
    description: subtitle,
    openGraph: {
      title: `${title}`,
      description: subtitle,
      images: [thumbnail_og, ...previousImages],
    },
  };
}

export async function generateStaticParams() {
  const courses = data["courses"];

  return courses.map((course) => ({
    courseSlug: course.slug,
  }));
}

export default function CourseDetail({
  params,
}: {
  params: { courseSlug: string };
}) {
  const { courseSlug } = params;

  const course = getCourseBySlug(courseSlug);

  if (!course) return redirect("/");

  const {
    id,
    title,
    subtitle,
    objectives,
    features,
    trialUrl,
    price,
    discountedPrice,
    modules,
    requirements,
    abbr,
    thumbnail,
    background,
    youtubeId,
    calendar,
    promotions,
    payment_methods,
    lecturers,
    tags,
    benefits,
    highlights,
    techs,
    showcases,
  } = course;

  return (
    <div className="relative pb-12">
      {/* Title */}
      <CourseHeading
        title={title}
        subtitle={subtitle}
        tags={tags}
        highlights={highlights}
        techs={techs}
        slug={courseSlug}
        thumbnail={thumbnail}
        background={background}
        trialUrl={trialUrl}
      />

      {/* Course Navigation */}
      <CourseNavigation />

      <div className="py-10 space-y-24 md:py-20 sm:space-y-36">
        {/* <CourseInfoMobile
          discountedPrice={discountedPrice}
          price={price}
          slug={courseSlug}
          title={title}
          thumbnail={thumbnail}
          youtubeId={youtubeId}
        /> */}

        {/* Benefits */}
        <CourseBenefits benefits={benefits} background={background} />

        {/* Partnership */}
        {courseSlug === "khoa-hoc-lap-trinh-web-fullstack" && (
          <CoursePartnership />
        )}

        {/* What you'll learn */}
        <CourseObjectives objectives={objectives} background={background} />

        {/* Requirements */}
        <CourseRequirements
          requirements={requirements}
          background={background}
        />

        {/* Features */}
        <CourseFeatures features={features} />

        {/* Course content */}
        <CourseContent
          modules={modules}
          highlights={highlights}
          background={background}
        />

        {courseSlug === "khoa-hoc-lap-trinh-web-fullstack" && (
          <CourseWorkshops />
        )}

        {/* Lecturers */}
        <CourseLecturers lecturers={lecturers} background={background} />

        {/* Showcase */}
        <CourseShowcases showcases={showcases} />

        {/* CourseCalen */}
        <CourseOpeningSchedules calendars={calendar} background={background} />

        <CoursePaymentMethods
          payment_methods={payment_methods}
          slug={courseSlug}
        />
        <CoursePromotion promotions={promotions} />

        {/* Workspaces */}
        <CourseWorkspaces />

        {/* Feedback */}
        <CourseFeedback />

        {courseSlug === "khoa-hoc-lap-trinh-web-fullstack" && (
          <>
            {/* Reviews */}
            <CourseReviews />
          </>
        )}

        {/* CTA */}
        <CourseCTA name={abbr} slug={courseSlug} />
      </div>
    </div>
  );
}
