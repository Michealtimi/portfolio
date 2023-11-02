export default function Header(){
    return (
        <div>
                <div className="  w-20 h-3  top-20  left-[150px] relative"> <img src="https://th.bing.com/th/id/OIP.lvOfqAUcFPQpSLlkszkrpwHaF7?w=243&h=194&c=7&r=0&o=5&dpr=2&pid=1.7"  alt="logo"></img> </div>
                <nav className="flex justify-end relative top-24 right-[240px] text-white font-bold">
                <ul className="flex gap-4  ">
                    <li> <a href="/services"></a> Services </li>
                    <li> Work</li>
                    <li> Blog </li>
                </ul>
            
            </nav>

        </div>
    )
}