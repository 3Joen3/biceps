interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Page({ className, children }: Props) {
  return <main className={`w-[94%] mx-auto my-3 ${className}`}>{children}</main>;
}
