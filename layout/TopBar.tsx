import { Icon, CheckCircle, Mail, Phone } from "react-feather";

export default function TopBar() {
  return (
    <div className="bg-black py-1.5 flex items-center">
      <div className="w-[94%] mx-auto text-white">
        <div className="flex justify-between">
          <Highlights />
          <Contact />
        </div>
      </div>
    </div>
  );
}

function Highlights() {
  return (
    <ItemContainer>
      <Item Icon={CheckCircle} text="Fri frakt från 700 SEK" />
      <Item Icon={CheckCircle} text="Snabb leverans" />
      <Item Icon={CheckCircle} text="1000+ nöjda kunder" />
    </ItemContainer>
  );
}

function Contact() {
  return (
    <ItemContainer>
      <Item Icon={Mail} text="hej@biceps.se" />
      <Item Icon={Phone} text="+46700000000" />
    </ItemContainer>
  );
}

function ItemContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-6">{children}</div>;
}

function Item({ Icon, text }: { Icon: Icon; text: string }) {
  return (
    <span className="flex items-center gap-1.5 uppercase text-sm font-semibold">
      <Icon size={20} />
      {text}
    </span>
  );
}
