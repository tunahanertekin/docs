import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Streamlined Development",
    description: (
      <>
        With robolaunch's containerized, Kubernetes-orchestrated environment, enjoy instant setup, easy code access via URLs, and seamless deployment, making software development a breeze.
      </>
    ),
  },
  {
    title: "Empowered Collaboration",
    description: (
      <>
        Go from local to global effortlessly. Collaborate with your team anywhere, onboard new developers in minutes, and harness the power of robust servers to build and innovate together.
      </>
    ),
  },
  {
    title: "GPU-Powered Performance",
    description: (
      <>
        Leverage GPU resources for AI and robotics development, ensuring high-performance computing, while a virtual browser environment keeps your workflow smooth and efficient.
      </>
    ),
  },
  {
    title: "Cloud-First Approach",
    description: (
      <>
        Shift your software development paradigm to the cloud, going from development to production with a single click, all while creating and deploying code together, wherever you are.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
