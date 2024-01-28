import { Card, Skeleton, Stack } from "@mantine/core";
import { range } from "../../utils/range";
interface Props {
  totalSkeletons?: number;
}
export default function PostSkeleton({ totalSkeletons = 1 }: Props) {
  return (
    <Stack>
      {range(0, totalSkeletons - 1).map((i) => (
        <Card key={i}>
          <Skeleton height={50} circle mb="xl" />
          <div className="pt-5 pb-10">
            <Skeleton height={8} radius="xl" />
            <Skeleton height={8} mt={6} radius="xl" />
            <Skeleton height={8} mt={6} radius="xl" />
            <Skeleton height={8} mt={6} width="70%" radius="xl" />
          </div>
        </Card>
      ))}
    </Stack>
  );
}
