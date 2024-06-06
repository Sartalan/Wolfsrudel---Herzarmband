
import './GanttStyles.css'
import { FrappeGantt } from 'frappe-gantt-react'

export default function GanttChart() {

    let project_begin = '2024-04-10'
    let project_end = '2024-07-14'
    let d1 = '2024-04-01';
    let d2 = new Date();
    d2.setDate(d2.getDate() + 5);
    let d3 = new Date();
    d3.setDate(d3.getDate() + 8);
    let d4 = new Date();
    d4.setDate(d4.getDate() + 20);

    const tasks = [
        {
            id: "Hardware",
            name: "Hardware",
            start: project_begin,
            end: project_end,
            progress: 100,
            dependencies: "S.1 , S.2 , S.3",
        },
        {
            id: "Software",
            name: "Software",
            start: project_begin,
            end: project_end,
            progress: 100
            // dependencies: "Task 1"
        },
        {
            id: "S.1",
            name: "Añadir Logo al Display",
            start: '2024-04-22',
            end: '2024-04-28',
            progress: 100
            // dependencies: "Task 2, Task 1"
        },
        {
            id: "S.2",
            name: "Testeo del Carrousel",
            start: '2024-04-24',
            end: '2024-04-30',
            progress: 100
            // dependencies: "Task 2, Task 1"
        },
        {
            id: "S.3",
            name: "Testeo del Botón",
            start: '2024-04-30',
            end: '2024-05-2',
            progress: 100
            // dependencies: "Task 2, Task 1"
        },
        {
            id: "Task 3",
            name: "Redesign website",
            start: new Date(),
            end: d4,
            progress: 100
            // dependencies: "Task 2, Task 1"
        },
        {
            id: "Task 3",
            name: "Redesign website",
            start: new Date(),
            end: d4,
            progress: 100
            // dependencies: "Task 2, Task 1"
        },
    ];

    return (
        <div className='GanntContainer'>
            <hr />
            <h1 className='GanntText'>Seguimiento del Proyecto</h1>
            <div id='GanttDiv'>
                <FrappeGantt
                    tasks={tasks}
                    // viewMode={this.state.mode}
                    onClick={task => console.log(task, "click")}
                    onDateChange={(task, start, end) =>
                        console.log(task, start, end, "date")
                    }
                    onProgressChange={(task, progress) =>
                        console.log(task, progress, "progress")
                    }
                    onTasksChange={tasks => console.log(tasks, "tasks")}
                    viewMode='Month'

                />
            </div>
        </div>
    );
}