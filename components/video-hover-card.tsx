"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Play, Pause } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

interface VideoHoverCardProps {
  imageUrl: string
  videoUrl: string
  altText: string
  className?: string
}

export function VideoHoverCard({ imageUrl, videoUrl, altText, className = "h-[350px]" }: VideoHoverCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const isMobile = useMobile()

  // Handle video loading
  useEffect(() => {
    if (videoRef.current) {
      const handleLoaded = () => {
        setVideoLoaded(true)
      }

      videoRef.current.addEventListener("loadeddata", handleLoaded)

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener("loadeddata", handleLoaded)
        }
      }
    }
  }, [])

  // Handle mouse enter for desktop
  const handleMouseEnter = () => {
    if (isMobile) return

    setIsHovering(true)
    if (videoRef.current && videoLoaded) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error)
      })
      setIsPlaying(true)
    }
  }

  // Handle mouse leave for desktop
  const handleMouseLeave = () => {
    if (isMobile) return

    setIsHovering(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      setIsPlaying(false)
    }
  }

  // Handle tap for mobile
  const handleTap = () => {
    if (!isMobile || !videoLoaded) return

    if (isPlaying) {
      if (videoRef.current) {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    } else {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error)
        })
        setIsPlaying(true)
      }
    }
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTap}
    >
      {/* Static image (shown by default) */}
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={altText}
        fill
        className={`object-cover transition-opacity duration-300 ${
          isHovering || (isMobile && isPlaying) ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Video */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isHovering || (isMobile && isPlaying) ? "opacity-100" : "opacity-0"
        }`}
        muted
        playsInline
        loop
        preload="metadata"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mobile play/pause button */}
      {isMobile && (
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}
        >
          <div className="bg-black/50 rounded-full p-3">
            {isPlaying ? <Pause className="h-8 w-8 text-white" /> : <Play className="h-8 w-8 text-white" />}
          </div>
        </div>
      )}

      {/* Mobile indicator that video is available */}
      {isMobile && !isPlaying && (
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">Tap to play</div>
      )}
    </div>
  )
}
