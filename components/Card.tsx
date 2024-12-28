import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, videoSrc }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div></div>
    <div
      className={`${
        (imgSrc || videoSrc) && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {/* video or image */}
      <div className="aspect-[16/9] w-full">
        {videoSrc ? (
          <iframe
            src={videoSrc}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-full w-full"
          ></iframe>
        ) : (
          <div className="relative h-full w-full">
            <Link href={href ? href : '#'} aria-label={`Link to ${title}`} className="">
              <Image alt={title} src={imgSrc} className="object-cover" fill />
            </Link>
          </div>
        )}
      </div>
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight hover:text-primary-500 hover:underline">
          <Link href={href ? href : '#'} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 hover:underline dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
