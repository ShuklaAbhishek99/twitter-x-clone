import FollowCard from "./FollowCard";

function WhoToFollow() {
    return (
        <div className="mt-6 border border-zinc-200 rounded-xl">
            <h1 className="m-3 font-bold text-xl">Who to follow</h1>
            <FollowCard />
            <FollowCard />
            <FollowCard />
        </div>
    );
}

export default WhoToFollow;
