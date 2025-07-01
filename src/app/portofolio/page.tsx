import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, portofolio } from "@/resources";
import { Projects } from "@/components/portofolio/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: portofolio.title,
    description: portofolio.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(portofolio.title)}`,
    path: portofolio.path,
  });
}

export default function Portofolio() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={portofolio.path}
        title={portofolio.title}
        description={portofolio.description}
        image={`/api/og/generate?title=${encodeURIComponent(portofolio.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Projects />
    </Column>
  );
}
