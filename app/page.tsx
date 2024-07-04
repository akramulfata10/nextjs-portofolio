import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Link } from "@nextui-org/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
      <Card>
        <CardBody>
          <div className="flex flex-col w-full">
            <div className="flex justify-center">
              <Image
                src="/fata.jpeg"
                height={200}
                width={200}
                alt="enjoy time"
                className="justify-center rounded-lg border-l-slate-700"
              />
            </div>
            <div className="flex justify-center pt-2">
              <h2 className="text-3xl font-bold">Enjoy Time </h2>
            </div>
            <div className="flex justify-center m-4 gap-4">
              <Chip variant="shadow" color="primary" size="sm">
                Next.js
              </Chip>
              <Chip variant="shadow" color="primary" size="sm">
                laravel
              </Chip>
              <Chip variant="shadow" color="primary" size="sm">
                golang
              </Chip>
              <Chip variant="shadow" color="primary" size="sm">
                docker
              </Chip>
              <Chip variant="shadow" color="primary" size="sm">
                linux
              </Chip>
            </div>
            <div className="flex justify-center max-w-sm">
              <p className="text-lg text-center font-semibold">
                I as a junior Software Engeneering, I also listening music in my
                free time
              </p>
            </div>
            <Link href="https://github.com/akramulfata10/" target="_blank">
              <Card className="w-full mt-3" isHoverable>
                <CardBody className="p-3">
                  <h3 className="self-center text-lg">Github laravel</h3>
                </CardBody>
              </Card>
            </Link>
            <Link href="https://github.com/akramulfataa/" target="_blank">
              <Card className="w-full mt-3" isHoverable>
                <CardBody className="p-3">
                  <h3 className="self-center text-lg">Github golang</h3>
                </CardBody>
              </Card>
            </Link>
            <Link
              href="https://www.linkedin.com/in/akramul-fata-9302a21b7/"
              target="_blank"
            >
              <Card className="w-full mt-3" isHoverable>
                <CardBody className="p-3">
                  <h3 className="self-center text-lg">Linkedin</h3>
                </CardBody>
              </Card>
            </Link>
            <Link href="https://medium.com/@akramulfata10" target="_blank">
              <Card className="w-full mt-3" isHoverable>
                <CardBody className="p-3">
                  <h3 className="self-center text-lg">Medium</h3>
                </CardBody>
              </Card>
            </Link>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}
