import Image from "next/image"

export default function Collection({src, title, collection , age}) {
  return (
    <div className="text-center">
        <Image src={src} width={300} height={100} />
        <h2 className="text-4xl font-semi">{title}</h2>
        <h2 className="text-large">{collection}</h2>
        <p className="text-xl">AGE {age}</p>
    </div>
  )
}
