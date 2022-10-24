import { PdvIcon } from '@Uikit/Icons/PdvIcon'
import { TIconNames } from '@Uikit/Icons/TIconNames'
import PdvModal from '@Uikit/PdvModal'

type TAreYouSure = {
  title?: string
  areYouSure: boolean
  iconName?: TIconNames
  successButtonText?: string
  cancelButtonText?: string
  successAction: () => void
  cancelAction: () => void
}

const AreYouSureModal: React.FC<TAreYouSure> = (props) => {
  return (
    <PdvModal open={props.areYouSure} title={props.title} size="lg" headerColor="red-600">
      <div className="flex flex-col justify-center py-4" style={{ width: 400 }}>
        {props.iconName && <PdvIcon className="mx-auto mb-4 block" name={props.iconName} color="red-600" size={65} />}

        {props.children}
      </div>
    </PdvModal>
  )
}

export default AreYouSureModal
