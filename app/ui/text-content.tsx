const TextContent = ({ content }: { content: string }) => {
    return (
        <div>
            <p className=" text-lg text-slate-400 text-justify">{content}</p>
        </div>
    )
}

export default TextContent;