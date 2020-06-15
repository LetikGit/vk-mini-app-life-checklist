import React from 'react';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import Checkbox from '@vkontakte/vkui/dist/components/Checkbox/Checkbox';


const CheckboxItemTarget = ({ data, setChecked, isChecked }) => {
return (
	<FormLayout>
		<Checkbox checked={isChecked} onChange={() => setChecked(!isChecked)}>
			<img src={`https://vk.com/emoji/e/${data.emoji}.png`} alt="" />
			{` ${data.text}`}
		</Checkbox>
	</FormLayout>
)
}

export default CheckboxItemTarget;
