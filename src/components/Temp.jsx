import React from 'react'

export default function Foo(props){
	const { children } = props 

	return <div>
		this is foo
		{children}
	</div>
}