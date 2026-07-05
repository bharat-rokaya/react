import { InfoIcon, UserPlus } from "lucide-react";
import useState from "react";
const Hero = () => {

    const [count, setCount] = useState(0);
    return(
        <main className="flex items-center p-2 mx-12 my-12">
            <div className="w-13/20">
                <h1 className="text-fuchsia-600 font-semibold text-2xl mb-1">Something here</h1>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed assumenda omnis aspernatur. Quibusdam, officia sed ex laborum amet eos consequatur quod tempora quis exercitationem numquam vel, quia animi voluptatibus accusamus tenetur obcaecati dolores asperiores rem. Temporibus quis dolor, odio quod voluptas aut magnam minus ex reprehenderit qui sint a laboriosam molestias veritatis deleniti. Tenetur sit accusantium, beatae vel assumenda est maiores quod dolor rem quaerat aliquam, corporis molestias laborum culpa aliquid impedit consectetur reiciendis blanditiis quae optio. At est voluptate veritatis laudantium minus commodi deleniti. Fugiat nam suscipit est porro nobis repellendus, corporis sunt consectetur? Perferendis tenetur nulla voluptate, rerum, vitae magni suscipit, in neque adipisci molestias assumenda ullam incidunt fuga quaerat ea odit ipsam natus. Corrupti, libero unde. Laudantium?</p>

                <div className="flex mt-6">
    <button className="flex items-center gap-1 bg-fuchsia-200 hover:bg-fuchsia-300 text-fuchsia-700 px-3 py-2 mr-4 rounded-md">
        <InfoIcon size={18} />
        Learn More
    </button>

    <button className="flex items-center gap-1 bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-3 py-2 rounded-md">
        <UserPlus size={18} />
        Enroll Now
    </button>
    </div>  

    <div className="mt-4">
        <p>Count : {count}</p>
        <div className="flex gap-2 mt-2">
    <button className="flex items-center gap-1 border border-fuchsia-500 hover:border-fuchsia-600 bg-fuchsia-100 hover:bg-fuchsia-200 text-fuchsia-700 px-3 py-2 rounded-md" onClick={() => setCount(count + 1)}>
        Increase Count
    </button>
    <button className="flex items-center gap-1 border border-fuchsia-500 hover:border-fuchsia-600 bg-fuchsia-100 hover:bg-fuchsia-200 text-fuchsia-700 px-3 py-2 rounded-md" onClick={() => setCount(count - 1)}>
        Decrease Count
    </button>
        </div> 
        </div>

            </div>

            <div className="w-7/20 ml-12">
                <img src="./src/assets/images/image_3.jpg" className="rounded-md -translate-y-3"></img>
            </div>
        </main>
    );
}

export default Hero;