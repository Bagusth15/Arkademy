function Biodata() {
	return {
		name: 'Bagus Tri Harjanto',
		age: 21,
		address:
			'Jln. Bedahan RT.03/02 No.48, Pabuaran Mekar, Cibinong, Kab. Bogor',
		hobbies: ['Berenang', 'Futsal', 'Badminton'],
		is_married: false,
		list_school: [
			{
				name: 'SMK Negeri 1 Depok',
				year_in: 2012,
				year_out: 2015,
				major: 'Rekayasa Perangkat Lunak'
			},
			{
				name: 'Sekolah Tinggi Teknik PLN',
				year_in: 2015,
				year_out: 2019,
				major: 'Teknik Informatika'
			}
		],
		skills: [
			{
				skill_name: 'HTML',
				level: 'Expert'
			},
			{
				skill_name: 'PHP',
				level: 'Advanced'
			},
			{
				skill_name: 'JavaScript',
				level: 'Beginer'
			}
		],
		interest_in_coding: true
	};
}

let BiodataSaya = Biodata();
console.log(BiodataSaya);
