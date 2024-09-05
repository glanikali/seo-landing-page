import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function HeroWidgetCardList() {
  return (
    <div className="flex space-x-4">
      <Card className="bg-card  text-white text-[.5rem] h-fit w-[160px] bg-gray-800 border-t-8 border-x-0 border-t-solid border-t-primary ">
        <CardHeader className="flex justify-between">
          <div className="grid grid-cols-2">
            <div>
              <CardTitle className=" font-bold">uptime.com</CardTitle>
              <CardDescription className=" text-slate-300 text-[0.5rem]">
                https://uptime.com
              </CardDescription>
            </div>
            <div className="self-center justify-self-end">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>HTTP(S)</div>
          <div className="text-primary">Up for 22d 15h</div>
          <div>Uptime - 24hr</div>
          <div className="text-primary">100%</div>
        </CardContent>
      </Card>
      <Card className="bg-card  text-white text-[.5rem] h-fit w-[160px] bg-gray-800 border-t-8 border-x-0 border-t-solid border-t-red-600 ">
        <CardHeader className="flex justify-between">
          <div className="grid grid-cols-2">
            <div>
              <CardTitle className=" font-bold">uptime.com</CardTitle>
              <CardDescription className=" text-slate-300 text-[0.5rem]">
                https://uptime.com
              </CardDescription>
            </div>
            <div className="self-center justify-self-end">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>HTTP(S)</div>
          <div className="text-red-600">Up for 22d 15h</div>
          <div>Uptime - 24hr</div>
          <div className="text-red-600">74%</div>
        </CardContent>
      </Card>{" "}
      <Card className="bg-card  text-white text-[.5rem] h-fit w-[160px] bg-gray-800 border-t-8 border-x-0 border-t-solid border-t-primary hidden sm:block">
        <CardHeader className="flex justify-between">
          <div className="grid grid-cols-2">
            <div>
              <CardTitle className=" font-bold">uptime.com</CardTitle>
              <CardDescription className=" text-slate-300 text-[0.5rem]">
                https://uptime.com
              </CardDescription>
            </div>
            <div className="self-center justify-self-end">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>HTTP(S)</div>
          <div className="text-primary">Up for 22d 15h</div>
          <div>Uptime - 24hr</div>
          <div className="text-primary">100%</div>
        </CardContent>
      </Card>
    </div>
  );
}
