import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { clsx } from "clsx";
import React from "react";

const Tooltip = () => {
    return (
        <TooltipPrimitive.Provider>
            <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>
                    <button
                        className={clsx(
                            "inline-flex select-none items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
                            "bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-900",
                            "hover:bg-gray-50",
                            "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
                            // Register all radix states
                            "group",
                            "radix-state-open:bg-gray-50 dark:radix-state-open:bg-gray-900",
                            "radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900",
                            "radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50"
                        )}
                    >Hover</button>
                </TooltipPrimitive.Trigger>
                <TooltipPrimitive.Content
                    sideOffset={4}
                    className={clsx(
                        "radix-side-top:animate-slide-down-fade",
                        "radix-side-right:animate-slide-left-fade",
                        "radix-side-bottom:animate-slide-up-fade",
                        "radix-side-left:animate-slide-right-fade",
                        "inline-flex items-center rounded-md px-4 py-2.5",
                        "bg-white dark:bg-gray-800"
                    )}
                >
                    <TooltipPrimitive.Arrow className="fill-current text-white dark:text-gray-800" />
                    <span className="block text-xs leading-none text-gray-700 dark:text-gray-100">
                        Sorry, but our princess is in another castle
                    </span>
                </TooltipPrimitive.Content>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    );
};

export { Tooltip };