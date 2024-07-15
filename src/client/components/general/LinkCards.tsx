import { Card, CardHeader, CardContent } from '../ui/card'

function LinkCards() {
  return (
    <div className="flex max-sm:flex-wrap p-5">
      <Card className="m-2 flex flex-col items-center justify-center flex-auto bg-secondary">
        <CardHeader className="max-sm:pb-2">
          <h5 className="sm:m-4">Follow me</h5>
        </CardHeader>
        <CardContent className="w-full flex justify-around">
          <div className="max-w-20 flex-1 p-3 flex items-center justify-center hover:scale-[105%]">
            <img src="/li-mark-white.png" className="object-contain" />
          </div>
          <div className="max-w-20 flex-1 p-3 flex items-center justify-center hover:scale-[105%]">
            <img src="/github-mark-white.png" className="object-contain" />
          </div>
        </CardContent>
      </Card>
      <Card className="m-2 flex flex-col items-center justify-center  flex-auto bg-secondary">
        <CardHeader className="max-sm:pb-2">
          <h5 className="sm:m-4">Join the Re:Gear community</h5>
        </CardHeader>
        <CardContent className="w-full flex justify-around">
          <div className="max-w-20 flex-1 p-2 flex items-center justify-center hover:scale-[105%]">
            <img src="/discord-mark-white.png" className="object-contain" />
          </div>
          <div className="max-w-20 flex-1 p-3 flex items-center justify-center hover:scale-[105%]">
            <img src="/li-mark-white.png" className="object-contain" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LinkCards
