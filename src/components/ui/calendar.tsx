import * as React from "react";
import { cn } from "@/lib/utils";
import { differenceInCalendarDays } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  DayPicker,
  labelNext,
  useDayPicker,
  labelPrevious,
} from "react-day-picker";
import { Button, buttonVariants } from "./button";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  /**
   * In the year view, the number of years to display at once.
   * @default 12
   */
  yearRange?: number;
  /**
   * Wether to let user switch between months and years view.
   * @default false
   */
  showYearSwitcher?: boolean;
};

function Calendar({
  className,
  classNames,
  yearRange = 12,
  numberOfMonths,
  showOutsideDays = true,
  showYearSwitcher = false,
  ...props
}: CalendarProps) {
  const [navView, setNavView] = React.useState<"days" | "years">("days");
  const [displayYears, setDisplayYears] = React.useState<{
    to: number;
    from: number;
  }>(
    React.useMemo(() => {
      const currentYear = new Date().getFullYear();
      return {
        to: currentYear + Math.ceil(yearRange / 2),
        from: currentYear - Math.floor(yearRange / 2 - 1),
      };
    }, [yearRange])
  );

  const { endMonth, startMonth, onNextClick, onPrevClick } = props;

  const columnsDisplayed = navView === "years" ? 1 : numberOfMonths;

  return (
    <DayPicker
      className={cn("p-3", className)}
      showOutsideDays={showOutsideDays}
      style={{
        width: 248.8 * (columnsDisplayed ?? 1) + "px",
      }}
      numberOfMonths={
        // we need to override the number of months if we are in years view to 1
        columnsDisplayed
      }
      classNames={{
        month_grid: "mt-4",
        nav: "flex items-start",
        week: "mt-2 flex w-full",
        weekdays: "flex flex-row",
        hidden: "invisible hidden",
        range_end: "day-range-end rounded-e-md",
        month: "w-full gap-y-4 overflow-x-hidden",
        today: "bg-accent text-accent-foreground",
        range_start: "day-range-start rounded-s-md",
        disabled: "text-muted-foreground opacity-50",
        caption_label: "truncate text-sm font-medium",
        caption: "relative flex items-center justify-center pt-1",
        weekday: "w-8 text-[0.8rem] font-normal text-muted-foreground",
        months: "relative flex flex-col gap-y-4 sm:flex-row sm:gap-y-0",
        month_caption: "relative mx-10 flex h-7 items-center justify-center",
        selected:
          "bg-primary text-primary-foreground hover:!bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        range_middle:
          "rounded-none aria-selected:bg-accent aria-selected:text-accent-foreground hover:aria-selected:!bg-accent hover:aria-selected:text-accent-foreground",
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal transition-none hover:bg-transparent hover:text-inherit aria-selected:opacity-100"
        ),
        button_next: cn(
          buttonVariants({
            variant: "outline",
            className:
              "absolute right-0 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          })
        ),
        button_previous: cn(
          buttonVariants({
            variant: "outline",
            className:
              "absolute left-0 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          })
        ),
        day: "flex size-8 flex-1 items-center justify-center rounded-md p-0 text-sm [&:has(button)]:hover:!bg-accent [&:has(button)]:hover:text-accent-foreground [&:has(button)]:hover:aria-selected:!bg-primary [&:has(button)]:hover:aria-selected:text-primary-foreground",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          const Icon = orientation === "left" ? ChevronLeft : ChevronRight;
          return <Icon className="h-4 w-4" />;
        },
        CaptionLabel: ({ children, ...props }) => {
          if (!showYearSwitcher) return <span {...props}>{children}</span>;

          return (
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-full truncate text-sm font-medium"
              onClick={() =>
                setNavView((prev) => (prev === "days" ? "years" : "days"))
              }
            >
              {navView === "days"
                ? children
                : displayYears.from + " - " + displayYears.to}
            </Button>
          );
        },
        MonthGrid: ({ children, className, ...props }) => {
          const { goToMonth } = useDayPicker();
          if (navView === "years") {
            return (
              <div
                className={cn("grid grid-cols-4 gap-y-2", className)}
                {...props}
              >
                {Array.from(
                  { length: displayYears.to - displayYears.from + 1 },
                  (_, i) => {
                    const isBefore =
                      differenceInCalendarDays(
                        new Date(displayYears.from + i, 12, 31),
                        startMonth!
                      ) < 0;

                    const isAfter =
                      differenceInCalendarDays(
                        new Date(displayYears.from + i, 0, 0),
                        endMonth!
                      ) > 0;

                    const isDisabled = isBefore || isAfter;
                    return (
                      <Button
                        key={i}
                        variant="ghost"
                        disabled={navView === "years" ? isDisabled : undefined}
                        className={cn(
                          "h-7 w-full",
                          displayYears.from + i === new Date().getFullYear() &&
                            "bg-accent text-accent-foreground"
                        )}
                        onClick={() => {
                          setNavView("days");
                          goToMonth(
                            new Date(
                              displayYears.from + i,
                              new Date().getMonth()
                            )
                          );
                        }}
                      >
                        {displayYears.from + i}
                      </Button>
                    );
                  }
                )}
              </div>
            );
          }
          return (
            <table className={className} {...props}>
              {children}
            </table>
          );
        },
        Nav: ({ children, className, ...props }) => {
          const { nextMonth, goToMonth, previousMonth } = useDayPicker();

          const isPreviousDisabled = (() => {
            if (navView === "years") {
              return (
                (startMonth &&
                  differenceInCalendarDays(
                    new Date(displayYears.from - 1, 0, 1),
                    startMonth
                  ) < 0) ||
                (endMonth &&
                  differenceInCalendarDays(
                    new Date(displayYears.from - 1, 0, 1),
                    endMonth
                  ) > 0)
              );
            }
            return !previousMonth;
          })();

          const isNextDisabled = (() => {
            if (navView === "years") {
              return (
                (startMonth &&
                  differenceInCalendarDays(
                    new Date(displayYears.to + 1, 0, 1),
                    startMonth
                  ) < 0) ||
                (endMonth &&
                  differenceInCalendarDays(
                    new Date(displayYears.to + 1, 0, 1),
                    endMonth
                  ) > 0)
              );
            }
            return !nextMonth;
          })();

          const handlePreviousClick = React.useCallback(() => {
            if (!previousMonth) return;
            if (navView === "years") {
              setDisplayYears((prev) => ({
                to: prev.to - (prev.to - prev.from + 1),
                from: prev.from - (prev.to - prev.from + 1),
              }));
              onPrevClick?.(
                new Date(
                  displayYears.from - (displayYears.to - displayYears.from),
                  0,
                  1
                )
              );
              return;
            }
            goToMonth(previousMonth);
            onPrevClick?.(previousMonth);
          }, [previousMonth, goToMonth]);

          const handleNextClick = React.useCallback(() => {
            if (!nextMonth) return;
            if (navView === "years") {
              setDisplayYears((prev) => ({
                to: prev.to + (prev.to - prev.from + 1),
                from: prev.from + (prev.to - prev.from + 1),
              }));
              onNextClick?.(
                new Date(
                  displayYears.from + (displayYears.to - displayYears.from),
                  0,
                  1
                )
              );
              return;
            }
            goToMonth(nextMonth);
            onNextClick?.(nextMonth);
          }, [goToMonth, nextMonth]);
          return (
            <nav className={cn("flex items-center", className)} {...props}>
              <Button
                type="button"
                variant="outline"
                disabled={isPreviousDisabled}
                onClick={handlePreviousClick}
                tabIndex={isPreviousDisabled ? undefined : -1}
                className="absolute left-0 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
                aria-label={
                  navView === "years"
                    ? `Go to the previous ${
                        displayYears.to - displayYears.from + 1
                      } years`
                    : labelPrevious(previousMonth)
                }
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                type="button"
                variant="outline"
                disabled={isNextDisabled}
                onClick={handleNextClick}
                tabIndex={isNextDisabled ? undefined : -1}
                className="absolute right-0 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
                aria-label={
                  navView === "years"
                    ? `Go to the next ${
                        displayYears.to - displayYears.from + 1
                      } years`
                    : labelNext(nextMonth)
                }
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </nav>
          );
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
