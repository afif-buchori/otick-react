import clsx from "clsx";
import * as lucideIcons from "lucide-react";
import React from "react";

export const { icons } = lucideIcons;

interface LucideProps extends React.ComponentPropsWithoutRef<"svg"> {
    icon: keyof typeof icons;
    title?: string;
    absoluteStrokeWidth?: boolean;
}

function Lucide(props: LucideProps) {
    const { icon, className, ...computedProps } = props;
    const Component = icons[props.icon];
    return (
        <Component
            {...computedProps}
            className={clsx(["stroke-[2]", props.className || "w-5 h-5"])}
        />
    );
}

export default Lucide;
