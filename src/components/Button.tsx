import React from 'react';

type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
    variant?: 'strike' | 'ball' | 'neutral' | 'icon';
    size?: 'lg' | 'md' | 'icon';
    disabled?: boolean;
    className?: string; // Allow overrides
};

export const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    variant = 'neutral',
    size = 'lg',
    disabled = false,
    className = ''
}) => {
    const baseStyles = "transition-all duration-75 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center";

    const variants = {
        strike: "bg-primary-red text-white uppercase font-black tracking-wider shadow-btn active:shadow-btn-pressed hover:brightness-110",
        ball: "bg-primary-blue text-white uppercase font-black tracking-wider shadow-btn active:shadow-btn-pressed hover:brightness-110",
        neutral: "bg-white text-slate-900 font-bold border-2 border-slate-200 active:bg-slate-50",
        icon: "bg-transparent text-slate-600 hover:bg-slate-200/50 p-2 rounded-full",
    };

    const sizes = {
        lg: "h-16 text-xl rounded-2xl w-full",
        md: "h-12 text-lg rounded-xl px-6",
        icon: "h-12 w-12",
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        >
            {children}
        </button>
    );
};
