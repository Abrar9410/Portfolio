

const Title = ({title}) => {
    return (
        <div className="px-4 pb-4 sm:pb-6 lg:pb-8 text-center text-[#01EEFF] bg-[#151925]">
            <h2 className="text-lg min-[200px]:text-xl min-[300px]:text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl font-bold">{title}</h2>
        </div>
    );
};

export default Title;