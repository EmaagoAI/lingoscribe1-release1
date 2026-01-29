import clsx from "clsx";

export function Card({ className, children, ...props }) {
  return (
    <div className={clsx("rounded-2xl shadow-md", className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={clsx("p-6", className)} {...props}>
      {children}
    </div>
  );
}
