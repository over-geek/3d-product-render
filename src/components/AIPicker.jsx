import CustomButton from './CustomButton';

const AIPicker = () => {
  return (
    <div className="aipicker-container">
      <p className="coming-soon-text">Coming Soon!</p>
      <div className="flex flex-wrap gap-3">
        <CustomButton
          type="outline"
          title="AI Logo"
          disabled={true}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="AI Full"
          disabled={true}
          customStyles="text-xs"
        />
      </div>
    </div>
  )
}

export default AIPicker;
