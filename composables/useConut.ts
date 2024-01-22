export default function () {
  const count = ref(0)

  const increment = () => {
    console.log('123')

    count.value += 1
  }
  return {
    count,
    increment
  }
}
