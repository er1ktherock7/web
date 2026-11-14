import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/content/portfolio";
import { Navigation } from "@/components/interactions";
import { ProjectArt } from "@/components/artwork";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return { title: p?.title, description: p?.description };
}
export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <>
      <Navigation />
      <main id="main" className="case wrap">
        <Link className="text-link" href="/#work">
          <ArrowLeft size={16} /> Selected work
        </Link>
        <h1>
          {p.title}
          <span className="accent">.</span>
        </h1>
        <p className="lead">{p.description}</p>
        <ProjectArt type={p.type} />
        <div className="case-body">
          <aside className="case-links">
            <p className="eyebrow">PERSONAL PROJECT / SOURCE OVERVIEW</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <a
              className="text-link"
              href={`https://github.com/er1ktherock7/web/blob/main/apps/${p.file}`}
            >
              View source on GitHub <ArrowUpRight size={16} />
            </a>
            <a className="text-link" href={`/web/apps/${p.file}`}>
              Open original tool <ArrowUpRight size={16} />
            </a>
            {p.type === "tempo" && (
              <Link className="text-link" href="/#play">
                Try the tempo study <ArrowUpRight size={16} />
              </Link>
            )}
          </aside>
          <div>
            <h2>The idea</h2>
            <p>{p.challenge}</p>
            <h2>Inside the implementation</h2>
            <p>{p.approach}</p>
            <h2>Project notes</h2>
            <p>{p.outcome}</p>
            <p className="eyebrow">
              PROJECT PREVIEWS ARE ORIGINAL VISUAL STUDIES, NOT SCREENSHOTS.
            </p>
          </div>
        </div>
        <Link href="/#work" className="primary-button">
          <ArrowLeft size={16} /> Back to all work
        </Link>
      </main>
    </>
  );
}
