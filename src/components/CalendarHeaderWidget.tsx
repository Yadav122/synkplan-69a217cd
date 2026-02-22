import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerTrigger } from "@/components/ui/drawer";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, Bell, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export const CalendarHeaderWidget = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const handleDateSelect = (newDate: Date | undefined) => {
        setDate(newDate);
        if (newDate) {
            setIsSheetOpen(true);
        }
    };

    const mockEvents = [
        { id: 1, title: "AI Study Plan: Next.js", time: "10:00 AM", type: "Study", color: "bg-violet-500" },
        { id: 2, title: "Revision: Data Structures", time: "02:00 PM", type: "Revision", color: "bg-cyan-500" },
        { id: 3, title: "Focus Session", time: "05:30 PM", type: "Focus", color: "bg-emerald-500" },
    ];

    return (
        <div className="calendar-widget-wrapper group">
            <div className="relative overflow-hidden bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] p-6 transition-all duration-500 hover:shadow-[0_8px_48px_0_rgba(31,38,135,0.12)] hover:bg-white/50">
                {/* Decoration */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors duration-500" />

                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center shadow-lg shadow-primary/20">
                                <CalendarIcon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-slate-900 tracking-tight">Your Schedule</h3>
                                <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">{format(new Date(), "MMMM yyyy")}</p>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-primary/20 animate-pulse" />
                            <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse delay-75" />
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-150" />
                        </div>
                    </div>

                    <div className="calendar-container-small overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm p-1">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={handleDateSelect}
                            className="p-3 pointer-events-auto"
                            classNames={{
                                month: "space-y-3",
                                caption: "flex justify-center pt-0 relative items-center",
                                caption_label: "text-[11px] font-bold text-slate-900",
                                nav: "space-x-1 flex items-center",
                                table: "w-full border-collapse",
                                head_row: "flex",
                                head_cell: "text-slate-400 rounded-md w-8 font-semibold text-[9px] uppercase tracking-tighter",
                                row: "flex w-full mt-1",
                                cell: "h-8 w-8 text-center text-[10px] p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                day: cn("h-8 w-8 p-0 font-medium transition-all duration-200 rounded-lg hover:bg-slate-50 aria-selected:opacity-100"),
                                day_selected: "bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white shadow-md shadow-primary/20",
                                day_today: "bg-slate-100 text-primary font-bold",
                                day_outside: "day-outside text-slate-300 opacity-50 aria-selected:bg-accent/50 aria-selected:text-slate-400 aria-selected:opacity-30",
                            }}
                        />
                    </div>
                    
                    <button 
                        onClick={() => setIsSheetOpen(true)}
                        className="w-full mt-4 py-3 px-4 rounded-xl bg-slate-900 text-white text-[11px] font-bold flex items-center justify-between group/btn overflow-hidden relative shadow-lg hover:shadow-xl transition-all active:scale-95"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-violet-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10">Up Next: AI Study Plan</span>
                        <ChevronRight className="relative z-10 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            <Drawer open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <DrawerContent className="px-6 pb-12 rounded-t-[3rem] border-none shadow-[0_-8px_48px_0_rgba(0,0,0,0.1)] bg-slate-50">
                    <div className="mx-auto w-12 h-1.5 rounded-full bg-slate-300 mt-4 mb-4" />
                    <DrawerHeader className="px-0">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Schedule</span>
                            </div>
                            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
                                <Clock className="w-3 h-3" />
                                <span>{format(new Date(), "HH:mm")}</span>
                            </div>
                        </div>
                        <DrawerTitle className="text-3xl font-extrabold text-slate-900 tracking-tight leading-none mb-1">
                            {date ? format(date, "EEEE") : "Selected"}
                        </DrawerTitle>
                        <DrawerDescription className="text-lg font-medium text-slate-500">
                            {date ? format(date, "MMMM do, yyyy") : "Choose a date"}
                        </DrawerDescription>
                    </DrawerHeader>
                    
                    <div className="mt-8 space-y-4 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                        {mockEvents.map((event, idx) => (
                            <div 
                                key={event.id} 
                                className="flex items-start gap-4 p-5 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group/item"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <div className={cn("w-1.5 h-12 rounded-full", event.color)} />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h4 className="font-bold text-slate-900 group-hover/item:text-primary transition-colors">{event.title}</h4>
                                        <div className="p-2 rounded-xl bg-slate-50 opacity-0 group-hover/item:opacity-100 transition-opacity">
                                            <Bell className="w-4 h-4 text-slate-400" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                                            <Clock className="w-3.5 h-3.5" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="w-1 h-1 rounded-full bg-slate-200" />
                                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                                            <Sparkles className="w-3.5 h-3.5 text-primary" />
                                            <span>{event.type}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    );
};
