interface BadgeProps {
  badge: string;
  variant: keyof typeof styles.variants;
}

const styles = {
  variants: {
    available: "bg-[#D7F5E3] text-accent",
    unavailable: "bg-[#FEF3F2] text-destructive",
    inProgress: "bg-[#FFFAEB] text-[#B54708]",
    amenity: "bg-[#F2F4F7] text-foreground",
  },
} as const;

export function Badge({ badge, variant }: BadgeProps) {
  const classes = `rounded-xl px-3 py-1 text-sm font-medium ${styles.variants[variant]}`;

  return <span className={classes}>{badge}</span>;
}
