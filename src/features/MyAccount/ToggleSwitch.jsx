export default function ToggleSwitch({ enabled, onChange }) {
    return (
        <label className="flex items-center cursor-pointer">
            <div className="relative">
                <input
                    type="checkbox"
                    className="sr-only"
                    checked={enabled}
                    onChange={onChange}
                />
                <div className={`block md:w-14 w-12 h-6 md:h-8 rounded-full ${enabled ? 'bg-cyan-600' : 'bg-cyan-700'}`}></div>
                <div className={`dot absolute left-1 top-1 bg-white md:w-6 w-4 md:h-6 h-4 rounded-full transition ${enabled ? 'transform translate-x-6' : ''}`}></div>
            </div>
        </label>
    )
}
